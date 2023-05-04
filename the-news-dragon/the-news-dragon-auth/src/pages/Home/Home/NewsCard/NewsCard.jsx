import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegStar, FaShare, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center' >
                <Image className='mt-2' style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ms-2 mt-3 flex-grow-1' >
                    <p className='mb-0' >{author?.name}</p>
                    <p  >{moment(author?.published_date).format("dddd, MMMM Do, YYYY")}</p>
                </div>
                <div >
                    <FaBookmark></FaBookmark>
                    <FaShare></FaShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='mb-2' >{title}</Card.Title>
                <Card.Img className='mb-3' variant="top" src={image_url} />
                <Card.Text className=' px-3' >
                    {details.length < 200 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='text-warning text-decoration-none' >Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted d-flex pb-0' >
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(rating?.number || 0)} readOnly />
                    <span className='ms-2'> {rating?.number}</span>
                </div>

                <p> <FaEye></FaEye> {total_view}</p>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;