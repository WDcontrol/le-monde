export const addToLocalStorageArray = (key, value) => {
    const currentItem = JSON.parse(localStorage.getItem(key))
    const newItem = currentItem ? [...currentItem, value] : [value]
    localStorage.setItem(key, JSON.stringify(newItem))
}