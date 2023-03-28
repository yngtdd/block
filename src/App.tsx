import  { ReactFlowProvider } from 'reactflow';
import ReactFlowPro from './components/ReactFlowPro';

function App(props: any) {
  return (
//    <div style={{ height: '90vh' }}>
//      <ReactFlowProvider>
        <ReactFlowPro {...props} />
//      </ReactFlowProvider>
//    </div>
  );
}

export default App;
