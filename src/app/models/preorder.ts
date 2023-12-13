export interface Preorder {
    id: number;
    customer_id: number;
    preorder_number: number;
    status: string;
    user_id: number;
    permit_status: null;
    total_price: number;
    total_quantity: number;
    created_at: Date;
    updated_at: Date;
    date: string;
    customer_name: string;
    customer_region: string;
}