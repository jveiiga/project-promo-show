import React from 'react'
import PromotionCard from 'components/Promotion/Card/Card'

import './List.css'

const PromotionList = ({ loading, promotions }) => {
    if(loading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="promotion-list">
            {promotions.map((promotions) => (
                <PromotionCard promotion={promotions} />
            ))}
        </div>
    )
}

export default PromotionList;