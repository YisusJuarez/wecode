import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import ServicesCard from '../ServicesCard/ServicesCard';
class Services extends React.Component {
    state = {
        services: [
            { name: 'Web Development', img: '/img/web.png' },
            { name: 'Web Design', img: '/img/diseno-web.png' },
            { name: 'Responsive Design', img: '/img/responsive.png' },
            { name: 'SEO Optimization', img: '/img/seo.png' }
        ]
    }
    render() {
        return (
            <>
                <Container maxWidth="lg">
                    <h1 className="titles-bg-black">Services</h1>
                    <Grid container spacing={2}>

                        {this.state.services.map((servicio,id) =>
                            <Grid item lg={2} md={3} sm={6} xs={6} >
                                <ServicesCard name={servicio.name} img={servicio.img}></ServicesCard>
                            </Grid>
                        )}

                    </Grid>



                </Container>
                <style jsx global>{`
                    .titles-bg-black{
                    font-family:'Roboto';
                    font-size:40px

                    }`}</style>

            </>

        )
    }
}
export default Services;
//<ServicesCard name="ok" desc={servicio.desc}></ServicesCard>