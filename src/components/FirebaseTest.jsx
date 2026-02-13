import { db } from './firebase'; // Correct path as both files are in the 'components' folder
import { collection, addDoc } from "firebase/firestore";

function FirebaseTest() {
  const testData = async () => {
    try {
      // This will create a collection named "test_collection" in Firebase
      await addDoc(collection(db, "test_collection"), {
        user: "Test User",
        status: "Success",
        date: new Date()
      });
      alert("Database connected and data has been saved successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("An error occurred: " + e.message);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ccc', margin: '20px' }}>
      <h2>Firebase Test Component</h2>
      <p>Click the button to add a test document to your Firestore database.</p>
      <button onClick={testData} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Test Firebase Connection</button>
    </div>
  );
}

export default FirebaseTest;