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
    staff_no VARCHAR(20) UNIQUE,
    full_name VARCHAR(150),
    role VARCHAR(100),
    department_id INT REFERENCES departments(id),
    hire_date DATE,
    status VARCHAR(20)
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    visit_type VARCHAR(50),
    status VARCHAR(50)
);

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


