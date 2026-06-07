CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    patient_no VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(10),
    date_of_birth DATE,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    phone VARCHAR(20),

    role_id INT NOT NULL,

    department VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_role
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE RESTRICT
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    visit_type VARCHAR(50),
    status VARCHAR(50)
);

ALTER TABLE visits
ADD COLUMN staff_id INT REFERENCES staff(id)
;

CREATE TABLE beds (
    id SERIAL PRIMARY KEY,
    bed_number VARCHAR(20),
    ward VARCHAR(100),
    status VARCHAR(20)
);

CREATE TABLE admissions (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    bed_id INT REFERENCES beds(id),
    admission_date TIMESTAMP,
    discharge_date TIMESTAMP
);

CREATE TABLE medicines (
    id SERIAL PRIMARY KEY,
    medicine_name VARCHAR(150),
    quantity INT,
    reorder_level INT,
    unit_price DECIMAL(10,2)
);

CREATE TABLE lab_tests (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    test_name VARCHAR(150),
    result TEXT,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email VARCHAR(150) UNIQUE,
    staff_id INT REFERENCES staff(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO roles (role_name, description) VALUES
('Admin', 'System administrator with full access'),
('Doctor', 'Medical doctor handling patients'),
('Nurse', 'Nursing staff for patient care'),
('Receptionist', 'Front desk and patient registration'),
('Pharmacist', 'Manages medication and pharmacy stock'),
('Lab Technician', 'Handles laboratory tests and results');

CREATE TABLE diagnoses (
    id SERIAL PRIMARY KEY,
    visit_id INT REFERENCES visits(id),
    diagnosis TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    visit_id INT REFERENCES visits(id),
    medicine_id INT REFERENCES medicines(id),
    quantity INT,
    dosage VARCHAR(100),
    instructions TEXT
);

ALTER TABLE medicines
ADD COLUMN expiry_date DATE;

ALTER TABLE medicines
ADD COLUMN batch_no VARCHAR(50);

ALTER TABLE medicines
ADD COLUMN supplier_name VARCHAR(150)
;

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    invoice_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2),
    status VARCHAR(20)
);
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    invoice_id INT REFERENCES invoices(id),
    amount DECIMAL(10,2),
    payment_method VARCHAR(50),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);








