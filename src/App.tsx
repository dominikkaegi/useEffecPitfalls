import {SynchronisationExample} from './explanation/synchronisation'
import {EffectNoCleanup} from './explanation/no-cleanup'
import {PollingWithLoginState} from './explanation/polling-with-isLoggedIn'
import {Polling} from './explanation/polling'

function App() {

  return (
    <div>
      <SynchronisationExample />
      {/* <EffectNoCleanup /> */}
      {/* <Polling /> */}
      {/* <PollingWithLoginState /> */}
    </div>
  )
}

export default App
