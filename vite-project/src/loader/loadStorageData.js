import { getShoppingCart } from "../utilities/fakedb";

const loadStorageData = async () => {
    const res = await fetch('products.json');
    const data = await res.json();

    const localData = getShoppingCart();
    const saveCart = [];
    for (const id in localData) {
        const exist = data.find(dt => dt.id === id);
        debugger;
        console.log(exist);
        if (exist) {
            const quantity = localData[id];
            debugger;
            exist.quantity = quantity;
            debugger;
            saveCart.push(exist);
        }
    }
    return saveCart;
}
export default loadStorageData;