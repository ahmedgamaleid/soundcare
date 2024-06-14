import React, { useEffect, useState } from 'react';

export default function ProfileDoctor() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [initialData, setInitialData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Mock initial data
    setInitialData({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123', image: null });
    setName('John Doe');
    setEmail('john.doe@example.com');
    setPassword('password123');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditing) {
      try {
        console.log('Saving data:', { name, email, password, image });
        // Call API to save data 
      } catch (error) {
        console.error('Error saving data:', error);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setName(initialData.name);
    setEmail(initialData.email);
    setPassword(initialData.password);
    setImage(initialData.image);
    setIsEditing(false);
  };

  return (
    <div className="container">
    <div style={{ height: '50vh' }}>
      <div className="row h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Upload an image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="col-12 mt-3">
            {isEditing ? (
              <>
                <button className="btn btn-primary me-2" type="submit" onClick={handleSubmit}>Save</button>
                <button className="btn btn-danger" type="button" onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button className="btn btn-primary" type="button" onClick={() => setIsEditing(true)}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
