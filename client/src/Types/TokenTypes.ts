export interface NullObjectProps {
  type: "null_object";
  value: null;
}

export interface StringProps {
  type: "string";
  value: string;
}

export interface NumberProps {
  type: "number";
  value: number;
}

export interface BooleanProps {
  type: "boolean";
  value: boolean;
}

export interface ObjectProps {
  type: "object";
  children: Array<ObjectKeyValueProp>;
}

export interface ArrayProps {
  type: "array";
  children: Array<
    | ObjectProps
    | NumberProps
    | NullObjectProps
    | StringProps
    | BooleanProps
    | ArrayProps
  >;
}

export interface ObjectKeyValueProp {
  type: "objectKeyValue";
  key: StringProps;
  value:
    | NumberProps
    | BooleanProps
    | StringProps
    | NullObjectProps
    | ArrayProps
    | ObjectProps;
}
