import React, { Component } from 'react';

console.log('ok')
class Test extends React.Component{
    render(){
        return(
            <div>
                
<h1>helo</h1>
                <form>
                    <input  type="text"  placeholder="name"/>
                    <br/>
                    <input  type="text"  placeholder="father name"/>
              <br/>
                     <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default Test;