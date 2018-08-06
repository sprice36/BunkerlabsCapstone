
import React from 'react';



    class NewForm extends React.Component {
        constructor(){
            super();
            this.handleEntry = this.handleEntry.bind()
            
        }


        handleEntry(event){
            event.preventDefault();
            const form = event.target;
            const data = new FormData(event.target);


        fetch('/form-submit', {
            method: 'POST',
            body: data,
        });
        }

        render() {
            return (
                <form onSubmit={this.handleEntry}>
                    <button>Add</button><button>Edit</button><button>Delete</button>

                    <label htmlFor='Company Name'>Company</label>
                    <input id='companyName' name='companyName' type='text'/>

                    <label htmlFor='website data'>Enter company website</label>
                    <input id='websiteData' name='websiteData' type='url'/>

                    <label htmlFor='summary of company'>Company Summary</label>
                    <input id='companySummary' name='companySummary' type='text'/>

                    <label htmlFor='Company Needs 1'>needs</label>
                    <input id='companyNeedsOne' name='companyNeedsOne' type='text'/>
                    
                    <label htmlFor='Company Needs 2'>needs</label>
                    <input id='companyNeedsTwo' name='companyNeedsTwo' type='text'/>
                    
                    <label htmlFor='Company Needs 3'>needs</label>
                    <input id='companyNeedsThree' name='companyNeedsThree' type='text'/>
                    
                    <label htmlFor='Company Needs 3'>needs</label>
                    <input id='companyNeedsThree' name='companyNeedsThree' type='text'/>
                    
                    <label htmlFor='Youtube Video'>Youtube Link</label>
                    <input id='youtubeLink' name='youtubeLink' type='url'/>
                    
                    <label htmlFor='Companies Products and Services'>Products and Services</label>
                    <input id='companyProductsAndServices' name='companyProductsAndServices' type='text'/>

                    <label htmlFor='Company Phone Number'>Company Phone Number</label>
                    <input id='companyPhoneNumber' name='companyPhoneNumber' type='tel'/>

                    <label htmlFor='Company Email'>Compamy Email</label>
                    <input id='companyEmail' name='companyEmail' type='email'/>

                    <button>Save Company</button><button>Edit Company</button><button>Delete Company</button>
                </form>
            );
    }
    }

export default NewForm;