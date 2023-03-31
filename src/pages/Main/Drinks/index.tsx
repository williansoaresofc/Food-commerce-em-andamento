import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useEffect, useState } from 'react'

import { getDrinks } from '../../../services/api'

export default function Drinks() {

  const [Drinks, setDrinks] = useState ([])

  useEffect(() => {
    ;(async () => {
      const drinksRequest = await getDrinks()

      setDrinks (drinksRequest.data)
    })()
  }, [])




  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={Drinks}></Snacks>
    </>
  )
}
