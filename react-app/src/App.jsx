// السطر التالي هو لاستدعاء المكون، تأكدي من مساره حسب ما ذكره الموقع
import Antigravity from './components/Antigravity' 

function App() {
  return (
    <>
      <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
        <Antigravity
          count={750}
          magnetRadius={5}
          ringRadius={15}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={2}
          lerpSpeed={0.1}
          color="#FF9FFC"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={4.5}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
    </>
  )
}

export default App