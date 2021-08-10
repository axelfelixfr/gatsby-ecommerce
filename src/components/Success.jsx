import React from 'react'
import cardSuccess from '../../img/debit-card.svg'

export default (props) => {
    return (
        <div className="card p-12 text-center">
            <img className="h-48 inline-block" src={cardSuccess} alt="Tarjeta de crédito de aprobación de pago" />
            <p className="text-4xl mt-8 font-semibold">Tu pago fue procesado</p>
            <p>Recibiras en tu correo electrónico un comprobante de pago e instrucciones adicionales</p>
        </div>
    )
}
