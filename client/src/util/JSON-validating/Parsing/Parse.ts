import { obj } from "../LexicalAnalysis/LexicalAnalyze";

export function Parse(arr: Array<obj>): object[] | undefined {
  let stack: object[][] = [];
  let prev: object | null = null;
  let prop: any = null;

  const pushItem = (item: any, prop: any): void => {
    if (prop) {
      prop.value.propValue = item;
      prop.type = "objectProperty";
      stack[stack.length - 1].push(prop);
      prop = null;
    } else {
      stack.length === 0
        ? stack.push(item)
        : stack[stack.length - 1].push(item);
    }
  };

  for (const item of arr) {
    switch (item.type) {
      case "string":
      case "number":
      case "boolean":
        pushItem(item, prop);
        break;
      case "null_object":
        item.type = "object";
        pushItem(item, prop);
        break;
      case "open_array":
      case "open_object":
        pushItem(item, prop);
        if (item.child !== undefined) stack.push(item.child); // type error 생겨서 바꿈
        break;
      case "close_object":
      case "close_array":
        stack.pop();
        break;
      case "separator":
        break;
      case "colon":
        prop = {
          value: {
            propKey: prev,
          },
        };
        stack[stack.length - 1].pop();
        break;
    }
    prev = item;
  }
  return stack.pop();
}
