import LSLayout from "./components/layout/LoopStudios_Layout"
import ContextProvider from "./context/navcontext"
const App = () => {
return(
<ContextProvider>
<LSLayout/>
</ContextProvider>

)
}
export default App