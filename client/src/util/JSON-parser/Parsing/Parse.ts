import obj from "../LexicalAnalysis/Lexicalize";

const stack: obj[][] = [];

export default function parser(arr: Array<obj>): obj[] | undefined {
  let prev: obj | null = null;
  let prop: any = null;

  for(const item of arr) {
    switch( item.type ) {
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
        stack[-1].pop();
        break;
    }
    prev = item;
  }
  return stack.pop();
}

function pushItem(item: any, prop: any): void {
  if (prop) {
    prop.value.propValue = item;
    prop.type = "objectProperty";
    stack[-1].push(prop);
    prop = null;
  } else {
    stack.length === 0 ? stack.push(item) : stack[-1].push(item);
  }
}