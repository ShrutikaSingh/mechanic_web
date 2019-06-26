import React,{Component} from 'react';
import {Container,Col,Row} from 'reactstrap';
import Star from '../star';



export default class Column extends Component{
    render(){
        return(
            <React.Fragment>
            <Container>
                <Row className="col-lg-12 text-center">
                    <ColumnHeading heading="Meet some of our mechanics"/>
                </Row>
                   <Row>
                        <div className="col-lg-4 col-md-4">
                            <div className="shadow-box-fill">
                                <div className="icom-section text-center">
                                    <ColumnData img_link="https://d3vl3jxeh4ou3u.cloudfront.net/mechanic/user110892/avatar.jpg" name="Rocco" body="Rocco has worked at Volvo, Honda, Acura, Lexus, and Toyota. He has 20 years of experience and specializes in diagnostics."></ColumnData>
                                </div>
                            </div>
                        </div>                        
                        <div className="col-lg-4 col-md-4">
                            <div className="shadow-box-fill">
                                <div className="icom-section text-center">
                                    <ColumnData img_link="https://d3vl3jxeh4ou3u.cloudfront.net/mechanic/user110892/avatar.jpg" name="Rocco" body="Rocco has worked at Volvo, Honda, Acura, Lexus, and Toyota. He has 20 years of experience and specializes in diagnostics."></ColumnData>
                                </div>
                            </div>
                        </div>  
                        
                        <div className="col-lg-4 col-md-4">
                            <div className="shadow-box-fill">
                                <div className="icom-section text-center">
                                    <ColumnData img_link="https://d3vl3jxeh4ou3u.cloudfront.net/mechanic/user110892/avatar.jpg" name="Rocco" body="Rocco has worked at Volvo, Honda, Acura, Lexus, and Toyota. He has 20 years of experience and specializes in diagnostics."></ColumnData>
                                </div>
                            </div>
                        </div>  
                    </Row>
            </Container>
            </React.Fragment>
        )
    }
}

const heading_style={
    paddingBootom:"10px"
}

class ColumnHeading extends Component{
    render(){
        return(     
           
                    <h1 style={heading_style} className="g-header-text">{this.props.heading}</h1>
            
        )
    }

}

class ColumnData extends Component{
    render(){
        return(
            <React.Fragment>
                                <img className="g-user-avatar g-user-avatar-large" class="rounded-circle " src={this.props.img_link}/>
                                <h5 class="">{this.props.name}</h5>
                                <p>{this.props.body}</p>
                                <Star/>
                                <br></br>
                                <br></br>
                                <br></br>
              
            </React.Fragment>
        )
    }

}

