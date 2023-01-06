import React, { Component } from 'react'
import AktivitasPost from '../container/AktivitasPost'

export default class Aktivitas extends Component {
  render() {
    return (
      <div className='container'>
         <br /><br /><br />
        <h1 className='pt-5 text-secondary text-center'>Aktivitas para peternak</h1>
        <p className='text-center'>Di sini merupakan tempat para peternak berbagi ilmu dan kendala dalam menjalankan peternakan mereka, dengan demikian setiap peternak mungkin memiliki masalah atau solusi yang sama , sehingga dapat menolong satu sama lain.</p>

        <AktivitasPost/>


      </div>
    )
  }
}
