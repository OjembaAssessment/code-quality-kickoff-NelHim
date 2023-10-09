/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function processItems(items) {
  let processedItems = [];
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.type === "Food") {
      processedItems.push(item);
    }
  }
  return processedItems;
}
