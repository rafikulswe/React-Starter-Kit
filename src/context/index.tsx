import { node } from "prop-types";
import AuthProvider from "./auth/auth.context";
import DataProvider from "./data/DataContext";
import ListProvider from "./list/list.context";
import LoadingProvider from "./loading/LoadingContext";
import ThemeProvider from "./data/ThemeContext";
import CountProvider from "./data/CountContext";
import VisitorContextProvider from "./data/VisitorContext";

const ContextProvider = ({ children }: any) => {
    return (
        <LoadingProvider>
            <AuthProvider>
                <VisitorContextProvider>
                    <DataProvider>
                        <ListProvider>
                            <CountProvider>
                                <ThemeProvider>
                                    {children}
                                </ThemeProvider>
                            </CountProvider>
                        </ListProvider>
                    </DataProvider>
                </VisitorContextProvider>
            </AuthProvider>
        </LoadingProvider>
    );
};

ContextProvider.propTypes = {
    children: node.isRequired
};

export default ContextProvider;