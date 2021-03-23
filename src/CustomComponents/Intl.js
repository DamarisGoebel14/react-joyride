import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";




const messages = {
    de: {
        back: "Zurück",
        close: "Schließen",
        last: "Zuletzt",
        next: "Nächster",
        open: "Öffnen",
        skip: "Überspringen",
        restart: "Starten Sie die Tour neu"
    },
    en: {
        back: "Back",
        close: "Close",
        last: "Last",
        next: "Next",
        open: "Open",
        skip: "Skip",
        restart: "Restart the tour"
    },
    es: {
        back: "Espalda",
        close: "Cerrar",
        last: "Último",
        next: "Siguiente",
        open: "Abierto",
        skip: "Omitir",
        restart: "Reiniciar el tour"
    },
    fr: {
        back: "Retour",
        close: "Fermer",
        last: "Dernier",
        next: "Suivant",
        open: "Ouvrir",
        skip: "Sauter",
        restart: "Redémarrer le tour"
    }
};

export default class Intl extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        locale: PropTypes.string.isRequired
    };

    render() {
        const { children, locale } = this.props;

        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        );
    }
}
