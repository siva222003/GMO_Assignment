export type FormType = {
  name: string;
  phone: string;
  email: string;
};

export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CollapseItemsType = {
  [key: string]: boolean;
};

export type CheckedItemsType = {
  [key: string]: {
    checked: boolean;
    subDepartments: {
      [key: string]: boolean;
    };
  };
};
