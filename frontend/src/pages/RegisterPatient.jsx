function RegisterPatient() {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Register Patient</h1>
          <p>Create a new patient record</p>
        </div>
      </div>

      <form className="form-card">
        {/* Patient Identification */}

        <section className="form-section">
          <div className="form-section-heading">
            <h2>Patient Identification</h2>
            <p>Basic information used to identify the patient.</p>
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="patient_no">
                Patient Number
              </label>

              <input
                id="patient_no"
                name="patient_no"
                type="text"
                placeholder="e.g. PT-2026-00125"
              />

              <span className="field-help">
                Leave blank to generate automatically.
              </span>
            </div>
          </div>
        </section>

        {/* Personal Information */}

        <section className="form-section">
          <div className="form-section-heading">
            <h2>Personal Information</h2>
            <p>Patient demographic information.</p>
          </div>

          <div className="form-grid form-grid-two">
            <div className="form-field">
              <label htmlFor="first_name">
                First Name <span>*</span>
              </label>

              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter first name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="last_name">
                Last Name <span>*</span>
              </label>

              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter last name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="gender">Gender</label>

              <select id="gender" name="gender" defaultValue="">
                <option value="" disabled>
                  Select gender
                </option>

                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="date_of_birth">
                Date of Birth
              </label>

              <input
                id="date_of_birth"
                name="date_of_birth"
                type="date"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}

        <section className="form-section">
          <div className="form-section-heading">
            <h2>Contact Information</h2>
            <p>Patient contact and address details.</p>
          </div>

          <div className="form-grid form-grid-two">
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. 0712 345 678"
              />
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="address">Address</label>

              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="Enter patient's address"
              />
            </div>
          </div>
        </section>

        {/* Form Actions */}

        <div className="form-actions">
          <button
            type="button"
            className="secondary-button"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="primary-button"
          >
            Register Patient
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPatient;
