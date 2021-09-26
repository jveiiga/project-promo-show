import React, { useState } from 'react'
import PromotionCard from 'components/Promotion/Card/Card'
import PromotionModal from 'components/Promotion/Modal/Modal'
import './List.css'

const PromotionList = ({ loading, error, promotions }) => {
    const [promotionId, setPromotionId] = useState(null);
    
    if (error) {
        return <div>Algo de errado aconteceu</div>;
    }

    if (loading || promotions === null) {
        return <div>Carregando...</div>;
    }

    if (promotions.length === 0) {
        return <div>Nenhum resultado encontrado</div>;
    }


    return (
      <div className="promotion-list">
        {promotions.map((promotion) => (
          <PromotionCard
            promotion={promotion}
            oncClickComments={() => setPromotionId(promotion.id)}
          />
        ))}
        {promotionId && (
          <PromotionModal
            promotionId={promotionId}
            onClickClose={() => setPromotionId(null)}
          />
        )}
      </div>
    );
}

export default PromotionList;