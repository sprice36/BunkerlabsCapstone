import React from 'react';
import axios from 'axios';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


class ImageUpload extends React.Component {
    constructor(){
        super();
        // this.handleEntry = this.handleEntry.bind()
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
                picture: null,
                industry: '',
                stage: '',
                location: ''
            }}
    }

    componentDidMount() {
        this.setState({
            baseFormState: this.state.form
        })
    }

    handlename = (event) => {
        this.setState({
            form: { 
                ...this.state.form,
                name: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handlewebsite= (event) => {
        this.setState({
            form: {
                ...this.state.form,
                website: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handlesummary= (event) => {
        this.setState({
            form: { 
                ...this.state.form,
                summary: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleneed1= (event) => {
        this.setState({
            form: { 
                ...this.state.form,
                need1: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleneed2= (event) => {
        this.setState({
            form: { 
                ...this.state.form,
                need2: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleneed3= (event) => {
        this.setState({
            form: { 
                ...this.state.form,
                need3: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleyoutubeLink= (event) => {
        this.setState({
            form: { 
                ...this.state.form,
                youtubeLink: event.target.value
            }
        })
        console.log(this.state.form)
    }
    
    handleProductAndServices =(event) => {
        this.setState({
            form: { 
                ...this.state.form,
                productAndServices: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handlephone =(event) => {
        this.setState({
            form: { 
                ...this.state.form,
                phone: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyEmailForAdmin =(event) => {
        this.setState({
            form: { 
                ...this.state.form,
                email: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handlepicture =(event) => {
        this.setState({
            form: { 
                ...this.state.form,
                picture: event.target.files[0]
            }
        }, () => {
            // console.log(this.state.form.picture);
            // console.log(this.state.form);
        });

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
        })
        console.log(this.state.form)
    }
    handlestage =(event) => {
        this.setState({
            form: { 
                ...this.state.form,
                stage: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handlelocation =(event) => {
        this.setState({
            form: { 
                ...this.state.form,
                location: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handleEntry(event) {
        event.preventDefault();
        // const form = event.target.value;
        // const data = new FormData(event.target);
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

        // let fd = new FormData();
        // fd.append('picture', this.state.form.picture, this.state.form.picture.name);
        let fd;
        this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
        fd = new FormData();
        fd.append('picture', blob);
        });

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
            paypalLink: this.state.form.paypalLink
        };

        axios.post('http://localhost:4000/api/createcompany', companyObject)
        .then(res => {
            console.log(res);
            return res.data._id;
        })
        .then((id) => {
            console.log('id',id);
            axios({
                method: 'post',
                url: `http://localhost:4000/api/createcompanypicture/${id}`, 
                data: fd,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
            })
        .catch(err => console.log(err));
    };

    _crop() {
        // const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
        this.setState({
            croppedImage: this.refs.cropper.getCroppedCanvas().toDataURL()
        });   
        console.log(this.state.croppedImage);
    }
    // after submit button is clicked the functionality needs to redirect to /admin page 
    // also needs to clear fields 


    render() {
        return (
            <form onSubmit={(e) => {this.handleEntry(e)}}>
            {/* {console.log(this.state.form)} */}

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
                <textarea value={this.state.form.productAndServices} cols="30" rows="10"
                onChange={this.handleProductAndServices}></textarea>
                <br/>

                <label htmlFor='Company Phone Number'>Company Phone Number</label>
                <input value={this.state.form.phone} type='tel'
                onChange={this.handlephone}/>
                <br/>

                <label htmlFor='Company Email'>Company Email</label>
                <input value={this.state.form.email} type='email'
                onChange={this.handleCompanyEmailForAdmin}/>
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
                    // value={this.state.form.picture}
                    // encType='multipart/form-data' 
                onChange={this.handlepicture}/>
                <br/>

                <input type="submit" value="Submit"/>
                <input type="reset" value="Reset"/>
                <br/>

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

                <h4>Cropped Preview</h4>
                <img src={this.state.croppedImage} alt="" className='imgstyle' />
            </form>
        );
}}

export default ImageUpload;