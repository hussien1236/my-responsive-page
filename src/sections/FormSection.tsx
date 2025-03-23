import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import "./FormSection.css";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

interface Country {
    name: {
      common: string;
    };
  }
const FormSection = () => {
    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        country: string;
        gender: string;
        date: Dayjs | null; 
      }>({
        name: "",
        email: "",
        country: "",
        gender: "",
        date: null,
      });
      useEffect(()=>{
            fetch("https://restcountries.com/v3.1/all?fields=name")
            .then((res)=> res.json())
            .then((data)=>{
            setCountries(data.map((country : Country) => country.name.common).sort());
        }).catch((error: unknown)=>{
            console.log("Error fetching countries:", error);
        });
      },[]);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
        setFormData({
            name: "",
            email: "",
            country: "",
            gender: "",
            date: null,
        });
    };
  return (
    <section className="FormSection">
       <h1>Contact Form</h1>
       <form onSubmit={handleSubmit} className="form-container">
          <TextField 
          label="Name" 
          variant="outlined" 
          name="name"
          fullWidth 
          value={formData.name} 
          onChange={handleChange}
          required/>
          <TextField 
          label="Email" 
          variant="outlined" 
          name="email"
          type="email" 
          fullWidth
          value={formData.email} 
          onChange={handleChange}
          required/>
          <TextField 
          label="Select Country"
          variant="outlined" 
          name="country" 
          value={formData.country} 
          onChange={handleChange}
          style={{ textAlign: "left" }}
          fullWidth
          required
          select>
            {countries.map((country : string, index) => (
            <MenuItem key={index} value={country}>{country}</MenuItem>
            ))}
          </TextField>
          <FormControl component="fieldset">
          <FormLabel style={{ alignSelf:"flex-start" }}>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
        <DatePicker
         label="Date of Birth"
         value={formData.date}
         onChange={(newDate) => setFormData({ ...formData, date: newDate })}
        />
        <Button type="submit" variant="contained" color="primary">
            Submit
        </Button>
       </form> 
    </section>
  )
}

export default FormSection