export type TModalList =
    | 'login1'
    | 'login2'
    | 'register1'
    | 'register2'
    | 'logout'
    | null;

export type TButtonList = {
    click: () => void;
    title: TModalList;
};


