import { Outlet } from "react-router-dom"
import styles from './AppLayout.module.css'
import { useEffect } from "react"

function AppLayout() {

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await fetch('https://formula1-backend.onrender.com/');
        const res2 = await fetch('https://ur-physique-backend.onrender.com/');
        const res3 = await fetch('https://x-games-backend.onrender.com/');
        const res4 = await fetch('https://z-animals-backend.onrender.com/');
        console.log(`F1 status ${res1.status}`);
        console.log(`Ur-physique status ${res2.status}`);
        console.log(`X-Games status ${res3.status}`);
        console.log(`Z-Animals status ${res4.status}`);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


  return (
    <>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
