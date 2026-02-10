import FirebaseTest from '../components/FirebaseTest';

const TestPage = () => {
  return (
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Firebase Connection Test</h1>
        <FirebaseTest />
      </div>
    </div>
  );
};

export default TestPage;