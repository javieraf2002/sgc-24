import react from "react"
import { FlatList } from "react-native"
import ServicioItem from "../../components/servicios/ServicioItem"
import { useSelector } from "react-redux"


const ServiciosList = () => {
    
    const renderServicio = ({item})=>{return <ServicioItem servicio = {item}/>}
    const servicios = useSelector(state => state.servicios.servicios)
    const serviciosData = servicios.filter(servicio => !servicio.isCompleted)

    return (
        <FlatList
            data={serviciosData}
            keyExtractor={item => item.id}
            renderItem={renderServicio}
        />
    )
}

export default ServiciosList