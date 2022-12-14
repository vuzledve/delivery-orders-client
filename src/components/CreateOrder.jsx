import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Center from "./Center";
import useForm from "../hooks/useForm";
import {createAPIEndpoint, ENDPOINTS} from "../api";
import {useNavigate} from "react-router";


const getFreshModel=() => ({
    SenderCity:"",
    SenderAddress:"",
    RecipientCity:"",
    RecipientAddress:"",
    CargoWeight:"",
    DatePickup:""
})

const CreateOrder = () => {
  /*  const navigate = useNavigate();*/
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange} = useForm(getFreshModel);

    const orderCreate = e =>{
        e.preventDefault()
        if (validate())
        {
            createAPIEndpoint(ENDPOINTS.deliveryOrders)
                .post(values)
                .then(res=>console.log(res))
                .catch(err => console.log(err));
            /*navigate("/");*/
            values.SenderCity = "";
            values.SenderAddress = "";
            values.RecipientCity = "";
            values.RecipientAddress = "";
            values.CargoWeight = "";
            values.DatePickup = "";
        }

    }
    const validate = () =>{
        let temp = {}
        temp.SenderCity= values.SenderCity!=""?"":"This field is required."
        temp.SenderAddress= values.SenderAddress!=""?"":"This field is required."
        temp.RecipientCity= values.RecipientCity!=""?"":"This field is required."
        temp.RecipientAddress= values.RecipientAddress!=""?"":"This field is required."
        temp.CargoWeight= values.CargoWeight!=""?"":"This field is required."
        temp.DatePickup=  Date.parse(values.DatePickup)?"":"This field is required."

        setErrors(temp)
        return Object.values(temp).every(x => x=="")
    }

    return (
        <Center>
            <Card sx={{width: 400}}>
                <CardContent sx={{textAlign:"center"}}>
                    <Typography variant="h3" sx={{my:3}}>
                        Create new order
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root':{
                            margin: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit = {orderCreate}>
                            <TextField
                                label = "?????????? ??????????????????????"
                                name="SenderCity"
                                value={values.SenderCity}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.SenderCity && {error:true, helperText: errors.SenderCity})}/>
                            <TextField
                                label = "?????????? ??????????????????????"
                                name="SenderAddress"
                                value={values.SenderAddress}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.SenderAddress && {error:true, helperText: errors.SenderAddress})}/>
                            <TextField
                                label = "?????????? ????????????????????"
                                name="RecipientCity"
                                value={values.RecipientCity}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.RecipientCity && {error:true, helperText: errors.RecipientCity})}/>
                            <TextField
                                label = "?????????? ????????????????????"
                                name="RecipientAddress"
                                value={values.RecipientAddress}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.RecipientAddress && {error:true, helperText: errors.RecipientAddress})}/>
                            <TextField
                                label = "?????? ??????????"
                                name="CargoWeight"
                                value={values.CargoWeight}
                                onChange={handleInputChange}
                                variant="outlined"
                                type="number"
                                {...(errors.CargoWeight && {error:true, helperText: errors.CargoWeight})}/>
                            <TextField
                                /*label = "???????? ???????????? ??????????"*/
                                name="DatePickup"
                                value={values.DatePickup}
                                onChange={handleInputChange}
                                variant="standard"
                                type="date"
                                {...(errors.DatePickup && {error:true, helperText: errors.DatePickup})}
                                helperText="???????? ???????????? ??????????"
                            />

                            <Button sx={{width: '90%'}}
                                    type="submit"
                                    variant = "contained"
                                    size = "large">Create order</Button>

                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );
};

export default CreateOrder;