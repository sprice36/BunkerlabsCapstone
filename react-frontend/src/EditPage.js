import React from 'react';
import axios from 'axios';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Modal from 'react-modal';
import {
    Link
} from 'react-router-dom';

class EditPage extends React.Component {
    constructor(){
        super();
        this.state={
            form:{
                name: '',
                website: '',
                summary: '',
                need1: '',
                need2: '',
                need3: '',
                youtubeLink: '',
                productAndServices: '',
                phone: '',
                email: '',
                industry: '',
                stage: '',
                location: '',
                picture: null,
            }
        }
    }

    componentDidMount() {
    fetch(`http://localhost:4000/api/companies/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(companyData => {
        console.log(companyData);
        this.setState({
            form: {
                name: companyData.name,
                website: companyData.website,
                summary: companyData.summary,
                youtubeLink: companyData.youtubeLink,
                productAndServices: companyData.productAndServices,
                phone: companyData.phone,
                email: companyData.email,
                industry: companyData.industry,
                stage: companyData.stage,
                location: companyData.location,
                picture: companyData.picture,
                need1: companyData.needs[0],
                need2: companyData.needs[1],
                need3: companyData.needs[2]
            }
        });
        })  
    }

    handlename = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                name: event.target.value
            }
        });
    }

    handlewebsite = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                website: event.target.value
            }
        });
    }

    handlesummary = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                summary: event.target.value
            }
        });
    }

    handleneed1 = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                need1: event.target.value
            }
        });
    }

    handleneed2 = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                need2: event.target.value
            }
        });
    }

    handleneed3 = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                need3: event.target.value
            }
        });
    }

    handleyoutubeLink = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                youtubeLink: event.target.value
            }
        });
    }
    
    handleproductAndServices = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                productAndServices: event.target.value
            }
        });
    }

    handlephone = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                phone: event.target.value
            }
        });
    }

    handleemail = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                email: event.target.value
            }
        });
    }

    handlePicture = (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                picture: event.target.files[0]
            }
        })
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.setState({
                    imagePreview: e.target.result
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        };
    }

    handleindustry =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                industry: event.target.value
            }
        });
    }

    handlestage =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                stage: event.target.value
            }
        });
    }

    handlelocation =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                location: event.target.value
            }
        });
    }

    updateCompany = (event) => {
        event.preventDefault()
        this.handleOpenModalUpdate();
        
        let needs = [];
        if (this.state.form.need1 !== '') {
            needs.push(this.state.form.need1);
        };
        if (this.state.form.need2 !== '') {
            needs.push(this.state.form.need2);
        };
        if (this.state.form.need3 !== '') {
            needs.push(this.state.form.need3);
        }; 

        // needs.push(this.state.form.need1);
        // needs.push(this.state.form.need2);
        // needs.push(this.state.form.need3);

        let companyObject = {
            name: this.state.form.name,
            summary: this.state.form.summary,
            industry: this.state.form.industry,
            stage: this.state.form.stage,
            productAndServices: this.state.form.productAndServices,
            needs: needs,
            website: this.state.form.website,
            email: this.state.form.email,
            phone: this.state.form.phone,
            youtubeLink: this.state.form.youtubeLink,
            paypalLink: this.state.form.paypalLink,
            location: this.state.form.location
        };

        console.log(companyObject);

        axios.post(`http://localhost:4000/api/updatecompany/${this.props.match.params.id}`, companyObject)
            .then(res => {
                // console.log(res);
                return res.data._id
            })
            .then((id) => {
                let fd;
                this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
                fd = new FormData();
                fd.append('picture', blob);
                axios({
                    method: 'post',
                    url: `http://localhost:4000/api/updatecompanypicture/${id}`,
                    data: fd,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
            }); 
        })
        .catch(err => console.log(err));
    }; 

    deleteCompany = (event) => {
        // event.preventDefault()
        axios.post(`http://localhost:4000/api/deletecompany/${this.props.match.params.id}`, this.props.match.params.id)
        .then(res => {
            console.log(res);
                return res.data._id;
        });
    }

    _crop() {
        // const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
        this.setState({
            croppedImage: this.refs.cropper.getCroppedCanvas().toDataURL()
        });
    };

    handleOpenModal = () => {
        this.setState({
            showModal: true
        });
    }
    
    handleCloseModal = () => {
        this.deleteCompany();
        this.setState({
            showModal: false,
        });
    }
    
    handleCloseModalCancel = () => {
        this.setState({
            showModal: false,
        });
    }

    handleOpenModalUpdate = () => {
        this.setState({
            showModalUpdate: true
        });
    }
    
    handleCloseModalUpdate = () => {
        this.setState({
            showModalUpdate: false
        });
    }

    render() {
        return (
            <div>
            <form onSubmit={(e) => {this.updateCompany(e)}} >

                <label htmlFor='Company Name'>Company</label>
                <input value={this.state.form.name} type='text'
                onChange={this.handlename}/>
                <br/>

                <label htmlFor='Website Data'>Enter Company Website</label>
                <input value={this.state.form.website} type='url'
                onChange={this.handlewebsite}/>
                <br/>

                <label htmlFor='summary of company'>Company Summary</label>
                <input value={this.state.form.summary} type='text'
                onChange={this.handlesummary}/>
                <br/>

                <label htmlFor='Company Needs 1'>Need 1</label>
                <input value={this.state.form.need1} type='text'
                onChange={this.handleneed1}/>
                <br/>
                
                <label htmlFor='Company Needs 2'>Need 2</label>
                <input value={this.state.form.need2} type='text'
                onChange={this.handleneed2}/>
                <br/>
                
                <label htmlFor='Company Needs 3'>Need 3</label>
                <input value={this.state.form.need3} type='text'
                onChange={this.handleneed3}/>
                <br/>
                
                <label htmlFor='Youtube Video'>Youtube Link</label>
                <input value={this.state.form.youtubeLink} type='url'
                onChange={this.handleyoutubeLink}/>
                <br/>
                
                <label htmlFor='Companies Products and Services'>Products and Services</label>
                <input value={this.state.form.productAndServices} type='text'
                onChange={this.handleproductAndServices} />
                <br/>

                <label htmlFor='Company Phone Number'>Company Phone Number</label>
                <input value={this.state.form.phone} type='tel'
                onChange={this.handlephone}/>
                <br/>

                <label htmlFor='Company Email'>Company Email</label>
                <input value={this.state.form.email} type='email'
                onChange={this.handleemail}/>
                <br/>
                
                <label htmlFor='Industry'>Industry</label>
                <input value={this.state.form.industry} type='text'
                onChange={this.handleindustry}/>
                <br/>
                
                <label htmlFor='Stage of Business'>Stage of Company</label>
                <input value={this.state.form.stage} type='text'
                onChange={this.handlestage}/>
                <br/>
                
                <label htmlFor='Business Location'>Business Location</label>
                <input value={this.state.form.location} type='text'
                onChange={this.handlelocation}/>
                <br/>
                
                <label htmlFor=''>Company Image</label>
                <input type='file' name='poi-thumbnail'
                        accept='.png, .jpg, .jpeg'
                onChange={this.handlePicture}/>
                
                
                <input type='submit' value='Save Changes' />
            </form>
                <button onClick={this.handleOpenModal}>Delete Company</button>

            <Cropper
                ref='cropper'
                src={this.state.imagePreview}
                style={{height: 400, width: '100%'}}
                // Cropper.js options
                aspectRatio={8/6}
                guides={false}
                autoCropArea={0}
                strict={false}
                highlight={false}
                dragCrop={true}
                cropBoxMovable={true}
                cropBoxResizable={false}
                crop={this._crop.bind(this)} />
                <br/>

            <Modal className=""
            isOpen={this.state.showModalUpdate}
            contentLabel="Minimal Modal Example">
                {this.state.form.name} profile was updated successfully!
                <Link to = "/admin" > 
                <button onClick={this.handleCloseModalUpdate}>Continue</button>
                </Link>
            </Modal>   

            <Modal className=""
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example">
                Are you sure you want to delete {this.state.form.name}'s profile?
                <Link to = "/admin" > 
                <button onClick={this.handleCloseModal}>Delete</button>
                </Link>
                <button onClick={this.handleCloseModalCancel}>Cancel</button>
            </Modal>    
            
            </div>
        );
    }
}


export default EditPage;