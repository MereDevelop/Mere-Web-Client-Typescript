import { MouseEvent, useRef } from 'react';
import CheckBox from '@components/auth/signup/CheckBox';
import '@styles/commons/modal/CheckBankModal.scss';

interface Bank {
  name: string;
  isSelected: boolean;
}

interface CheckBankModalProps {
  onClose: () => void;
  setAccountBank: (bankName: string) => void;
}

const CheckBankModal: React.FC<CheckBankModalProps> = ({
  onClose,
  setAccountBank,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleBankClick = (bankName: string) => {
    setAccountBank(bankName);
    onClose();
  };

  const handleInsideClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    onClose();
  };

  const banks: Bank[] = [
    { name: 'NH농협', isSelected: false },
    { name: '카카오뱅크', isSelected: false },
    { name: 'KB국민', isSelected: false },
    { name: '신한', isSelected: false },
    { name: '우리', isSelected: false },
    { name: 'IBK기업', isSelected: false },
    { name: '하나', isSelected: false },
    { name: '새마을금고', isSelected: false },
    { name: '농축협', isSelected: false },
    { name: 'SC제일', isSelected: false },
    { name: '경남', isSelected: false },
    { name: '광주', isSelected: false },
    { name: '제주', isSelected: false },
    { name: '전북', isSelected: false },
    { name: '씨티', isSelected: false },
    { name: 'KDB산업', isSelected: false },
    { name: '수협은행', isSelected: false },
    { name: 'BOA', isSelected: false },
    { name: '중국공상', isSelected: false },
    { name: 'HSBC', isSelected: false },
    { name: '중국건설', isSelected: false },
    { name: '도이치', isSelected: false },
    { name: 'BNP파리바', isSelected: false },
    { name: 'JP모간', isSelected: false },
    { name: '중국건설', isSelected: false },
  ];
  return (
    <div className='modal-overlay' onClick={handleOutsideClick}>
      <div className='modal' ref={modalRef} onClick={handleInsideClick}>
        <h1 className='bank-choice-comment'>은행을 선택해주세요.</h1>
        <div className='bank-list'>
          {banks.map((bank) => (
            <div onClick={() => handleBankClick(bank.name)} key={bank.name}>
              <CheckBox
                className='bank-choice-box'
                name={bank.name}
                isSelected={bank.isSelected}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckBankModal;
