-- AlterTable
ALTER TABLE "users" ADD COLUMN     "hasVoiceModel" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "customers" (
    "customer_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(50),
    "registration_date" DATE NOT NULL,
    "total_spent" DECIMAL(12,2) DEFAULT 0,
    "loyalty_points" INTEGER DEFAULT 0,
    "segment" VARCHAR(50),
    "last_purchase_date" DATE,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "employee_benefits" (
    "benefit_id" SERIAL NOT NULL,
    "employee_id" INTEGER,
    "health_insurance_plan" VARCHAR(50) NOT NULL,
    "health_insurance_cost" DECIMAL(10,2) NOT NULL,
    "retirement_contribution_pct" DECIMAL(5,2) NOT NULL,
    "paid_time_off_days" INTEGER NOT NULL,
    "sick_leave_days" INTEGER NOT NULL,
    "tuition_reimbursement" DECIMAL(10,2),
    "life_insurance_coverage" DECIMAL(10,2) NOT NULL,
    "dental_coverage" BOOLEAN DEFAULT false,
    "vision_coverage" BOOLEAN DEFAULT false,
    "wellness_stipend" DECIMAL(10,2),

    CONSTRAINT "employee_benefits_pkey" PRIMARY KEY ("benefit_id")
);

-- CreateTable
CREATE TABLE "employees" (
    "employee_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "department" VARCHAR(50) NOT NULL,
    "position" VARCHAR(50) NOT NULL,
    "hire_date" DATE NOT NULL,
    "salary" DECIMAL(10,2) NOT NULL,
    "commission_pct" DECIMAL(4,2),
    "manager_id" INTEGER,
    "performance_score" DECIMAL(3,1),

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "product_id" SERIAL NOT NULL,
    "product_name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "supplier" VARCHAR(100) NOT NULL,
    "stock_quantity" INTEGER NOT NULL,
    "cost_price" DECIMAL(10,2) NOT NULL,
    "selling_price" DECIMAL(10,2) NOT NULL,
    "reorder_level" INTEGER NOT NULL,
    "last_restock_date" DATE NOT NULL,
    "profit_margin" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "customer_id" INTEGER,
    "order_date" DATE NOT NULL,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "payment_method" VARCHAR(50) NOT NULL,
    "shipping_address" TEXT NOT NULL,
    "tracking_number" VARCHAR(50),
    "estimated_delivery" DATE,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "sales" (
    "sale_id" SERIAL NOT NULL,
    "employee_id" INTEGER,
    "order_id" INTEGER,
    "product_id" INTEGER,
    "quantity" INTEGER NOT NULL,
    "unit_price" DECIMAL(10,2) NOT NULL,
    "sale_date" DATE NOT NULL,
    "commission_amount" DECIMAL(10,2),
    "profit" DECIMAL(10,2) NOT NULL,
    "customer_rating" INTEGER,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("sale_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- AddForeignKey
ALTER TABLE "employee_benefits" ADD CONSTRAINT "employee_benefits_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "inventory"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
