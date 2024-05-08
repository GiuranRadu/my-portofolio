import { Outlet } from "react-router-dom"
import styles from './AppLayout.module.css'
import { useEffect } from "react"

function AppLayout() {

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://formula1-backend.onrender.com/');
        console.log(res);
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
