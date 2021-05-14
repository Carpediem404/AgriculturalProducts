import { defineComponent } from 'vue';

import './assets/css/reset.css';
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        {/* <div id="nav">
          <RouterLink to="/">Home</RouterLink> |<RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView /> */}
        <p>asdddsasa</p>
        {(() => {
          return <div>wwqwq</div>;
        })()}
      </>
    );
  },
});
