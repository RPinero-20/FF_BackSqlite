
export interface sectionsFromDBProps {
    id: string
    name: string
    imageUrl: string
    // productList: string[]
}

export interface ProductProps {
    id: string;
    imageUrl: string;
    name: string;
    code: string;
    description: string;
    isOffer: number;
    isFree: boolean;
    isOutStock: boolean;
    categoryID: string;
    sectionID: string;
    price: parseFloat;
}

export interface ProductDetail {
    id: string;
    imageUrl: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
    imageUrl5: string;
    imageUrl6: string;
    imageUrl7: string;
    name: string;
    code: string;
    description: string;
    longDescription: string;
    isOffer: number;
    isFree: boolean;
    isOutStock: boolean;
    discount: number;
    categoryID: string;
    sectionID: string;
    price: parseFloat;
}

export interface productListInterfaceData {
    productId: number;
    quantity: number;
}

export interface payResumeInterfaceData {
    subtotal: number,
    discount: number,
    ivaUsd: number,
    igtf: number,
    totalBsd: number,
    totalUsd: number
}

export interface orderInterfaceData {
    userId: string;
    orderId: string;
    productsList: productListInterfaceData[];
    payResume: payResumeInterfaceData;
}

export interface buyListConfirmData {
    productId: number;
    quantity: number;
}

export interface buyListConfirmInterface {
    userId: string;
    productsList: cartListinterfaceProduct[];
}

export interface lastConfirmOrderInterface {
    currency: string,
    subtotal: number,
    discount: number,
    ivaUsd: number,
    igtf: number,
    totalBsd: number,
    totalUsd: number    
}

export interface checkProductInterface {
    id: number;
    name: string;
    code: string;
    unitQty: number;
    unitPerBox: number;
    isOffer: number;
    isFree: boolean;
    isOutStock: boolean;
    price: number;
    requestedQty: number;
    discount?: number;
    isConfirmed?: boolean;
}

export interface orderDetailsInterface {
    userId: number;
    productsList: string;
    orderId: string;
    isOrderConfirmed?: number;
    payNumber: number;
    isOrderPaid: boolean;
    orderStatusId: number;
    bank: string;
    shippingAddress: string;
    depositorName: string;
    depositorPhone: string;
    subtotal: number;
    discount: number;
    ivaUsd: number;
    igtf: number;
    totalBsd: number;
    totalUsd: number;
}

export interface urlParams {
    category?: string;
    search?: string;
    id?: string;
    code?: string;
    token?: string;
    userId?: number;
    userName?: string;
    orderId?: string;
}

export interface userParams {
    token?: string;
    isLogged?: boolean;
}

export interface adminUsersInterfaceModel {
    id?: string,
    uuid: string,
    name: string,
    idNumber: number,
    email: string,
    password?: string,
    phone: number,
    status: boolean,
    job: string,
    department: string,
    address: string,
    roles?: string
}

export interface adminProductsInterfaceModel {
    imageUrl:string,
    name:string,
    code:string,
    type:string,
    byWeight:bool,
    weightPerUnit:number,
    weightPerBox:number,
    byUnit:bool,
    unitQty:number,
    saleUnitID: number,
    unitPerBox:number,
    picture?: string,
    description:string,
    isOffer:number,
    isFree:bool,
    isOutStock:bool,
    discount:number,
    categoryID:number,
    sectionID:number,
    price:number
}

export interface adminLoginUserInterfaceModel {
    userName: string,
    password: string
}

export interface clientLoginUserInterfaceModel {
    user: string,
    password: string
}

export interface clientUsersInterfaceModel {
    uuid?: string,
    rif: string,
    name: string,
    email: string,
    phone: number,
    phone2: number,
    address: string,
    represent: string,
    password?: string,
    status?: number,
    codeId: string,
    roles?: string
}


export interface isOrderConfirmedInterface {
    orderId: string,
    isOrderConfirmed: number
}


export interface bankInfoInterface {
    bankName: string,
    bankAccount: string
}

export interface companyInfoInterface {
    name: string,
    rif: string
}

export interface orderPayInterface {
    orderId: string,
    currency: string,
    totalBsd: string,
    totalUsd: string
}

export interface paymentDetailInterface {
    orderId: string,
    currency: string,
    totalPay: string,
    companyName: string,
    companyRif: string,
    downloadInvoice: string,
    bankList: bankInfoInterface[]
}

export interface productsListInterfaceData {
    id: string,
    name: string,
    code: string,
    price: number,
    quantity: number
}

export interface userOrdersInterface {
    orderId: string,
    amount: number,
    currency: Currencies,
    status: PaymentStatus,
    lastUpdateDate: string,
    productsList: productListInterfaceData[],
}

export interface infoOrderDetailPrintInterface {
        orderId: string,
        updatedAt: string,
        codes: string[],
        name: string[],
        quantity: number[],
        prices: string[],
        amounts: number[],
        currency: string,
        subtotal: string,
        totalPay: string,
}

export interface dataConfigurationWorkspaceInterface {
    token: string,
    userName: string,
    message: string,
    isLogged: true,
    categories: dataConfig[],
    sections: dataConfig[],
    salesUnits: dataConfig[],
    jobs: jobsDeptsInterface[],
    departments: jobsDeptsInterface[],
    status: dataConfig[],
    statusIdentifiers: statusIdentifiersInterface[],
    orderStatus: orderStatusesInterface[]
}

export interface dataConfig{
    id: string,
    name: string,
}

export interface jobsDeptsInterface{
    id: string,
    name: string,
    code: string,
    description: string,
}

export interface orderStatusesInterface{
    id: string,
    name: string,
    code: string,
}

export interface statusIdentifiersInterface{
    id: string,
    name: string,
    code: string,
    description: string
}

export interface adminCategorySection {
    categoryId: string,
    sectionId: string
}


export type ClientURLS = '/home'
    | '/productDetail'
    | '/categories'
    | '/productsList'
    | '/payresume'
    | '/buyListConfirm'
    | '/addressConfirmation'
    | '/lastConfirmationOrder'
    | '/paymentDetail'
    | '/paymentConfirmation'
    | '/userInfo'
    | '/userAuthInfo'
    | '/userOrders'
    | '/downloadInvoice'
    | '/signUp'
    | '/signIn'
    | '/logout';

export type AdminURLS = '/home'
    | '/products'
    | '/productDetail'
    | '/product'
    | '/product/newProduct'
    | '/deleteProduct'
    | '/categories'
    | '/category'
    | '/sections'
    | '/users'
    | '/user'
    | '/clients'
    | '/client'
    | '/orders'
    | '/order'
    | '/downloadInvoice'
    | '/login';

//revisar post y put de usuarios admin
