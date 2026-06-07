CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    patient_no VARCHAR(20) UNIQUE NOT NULL,

    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(10),
    date_of_birth DATE,

    phone VARCHAR(20),
    address TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,

    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,

    email VARCHAR(150) UNIQUE,
    phone VARCHAR(20),

    role_id INT NOT NULL REFERENCES roles(role_id),
    department_id INT REFERENCES departments(department_id),

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE,
    password_hash TEXT NOT NULL,

    staff_id INT UNIQUE REFERENCES staff(staff_id),

    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE visits (
    visit_id SERIAL PRIMARY KEY,

    patient_id INT NOT NULL REFERENCES patients(patient_id),

    visit_type VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',

    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE visit_staff (
    visit_staff_id SERIAL PRIMARY KEY,

    visit_id INT NOT NULL REFERENCES visits(visit_id),
    staff_id INT NOT NULL REFERENCES staff(staff_id),

    role_in_visit VARCHAR(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE diagnoses (
    diagnosis_id SERIAL PRIMARY KEY,

    visit_id INT NOT NULL REFERENCES visits(visit_id),
    staff_id INT REFERENCES staff(staff_id),

    diagnosis TEXT NOT NULL,
    notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE prescriptions (
    prescription_id SERIAL PRIMARY KEY,

    visit_id INT NOT NULL REFERENCES visits(visit_id),
    staff_id INT REFERENCES staff(staff_id),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE prescription_items (
    prescription_item_id SERIAL PRIMARY KEY,

    prescription_id INT NOT NULL REFERENCES prescriptions(prescription_id),
    medicine_id INT NOT NULL REFERENCES medicines(medicine_id),

    quantity INT NOT NULL,
    dosage VARCHAR(100),
    instructions TEXT
);

CREATE TABLE medicines (
    medicine_id SERIAL PRIMARY KEY,

    medicine_name VARCHAR(150) NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,

    reorder_level INT DEFAULT 10,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medicine_batches (
    batch_id SERIAL PRIMARY KEY,

    medicine_id INT NOT NULL REFERENCES medicines(medicine_id),

    batch_no VARCHAR(50),
    expiry_date DATE,

    quantity INT NOT NULL,
    supplier_name VARCHAR(150),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dispensing (
    dispensing_id SERIAL PRIMARY KEY,

    prescription_item_id INT REFERENCES prescription_items(prescription_item_id),

    batch_id INT REFERENCES medicine_batches(batch_id),

    quantity_dispensed INT NOT NULL,

    dispensed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE beds (
    bed_id SERIAL PRIMARY KEY,

    bed_number VARCHAR(20) UNIQUE NOT NULL,
    ward VARCHAR(100),

    status VARCHAR(20) DEFAULT 'available',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE admissions (
    admission_id SERIAL PRIMARY KEY,

    patient_id INT REFERENCES patients(patient_id),
    bed_id INT REFERENCES beds(bed_id),

    admission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    discharge_date TIMESTAMP
);
CREATE TABLE lab_tests (
    lab_test_id SERIAL PRIMARY KEY,

    patient_id INT REFERENCES patients(patient_id),
    visit_id INT REFERENCES visits(visit_id),

    test_name VARCHAR(150),
    result TEXT,

    status VARCHAR(50) DEFAULT 'pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE invoices (
    invoice_id SERIAL PRIMARY KEY,

    patient_id INT REFERENCES patients(patient_id),

    invoice_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'unpaid',

    total_amount DECIMAL(10,2) DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE invoice_items (
    invoice_item_id SERIAL PRIMARY KEY,

    invoice_id INT NOT NULL REFERENCES invoices(invoice_id),

    item_type VARCHAR(50),  -- consultation, lab, drug, admission
    description TEXT,

    quantity INT DEFAULT 1,
    unit_price DECIMAL(10,2),

    total DECIMAL(10,2)
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,

    invoice_id INT REFERENCES invoices(invoice_id),

    amount DECIMAL(10,2),
    payment_method VARCHAR(50),

    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);














