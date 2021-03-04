import $ from 'jquery'
import react from 'react'


export default function abc() {
    console.log('fromABC');
    $('.lamim').click(function(){
        alert('from jquery');
        console.log('jquery works');
      })
      $('.buttom').click(function(){
        alert(' Buttom jquery');
      })
    
    return
  }