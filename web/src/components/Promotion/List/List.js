import React, { useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import PromotionModal from 'components/Promotion/Modal/Modal';
import useApi from 'components/utils/useApi';
import './List.css';

const PromotionList = ({ loading, error, promotions, refetch }) => {
    const [promotionId, setPromotionId] = useState(null);
    const [deletePromotion, deletePromotionInfo] = useApi({
      method: 'DELETE',
    })
    
    if (error) {
        return <div>Algo de errado aconteceu</div>;
    }

    if (promotions === null || deletePromotionInfo.loading) {
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
             onclickDelete={async () => {
              await deletePromotion({
                url: `/promotions/${promotion.id}`,
              });
             refetch();
            }}
          />
        ))}
        {loading && <div>Carregando mais promoções...</div>}
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