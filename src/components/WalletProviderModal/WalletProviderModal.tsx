import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = useWallet()
  
  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Modal>
      <ModalTitle text="Select a wallet provider." />

      <ModalContent>
        <StyledWalletsWrapper>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={metamaskLogo} style={{ height: 32 }} />}
              onConnect={() => connect('injected')}
              title="Metamask"
            />
          </StyledWalletCard>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={walletConnectLogo} style={{ height: 24 }} />}
              onConnect={() => connect('walletconnect')}
              title="WalletConnect"
            />
          </StyledWalletCard>
        </StyledWalletsWrapper>
      </ModalContent>

      <ModalActions>
        <StyledCancelButton>
          <Button text="" onClick={onDismiss} />
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <path d="M9.82151 7.50008L14.908 2.41341C15.0301 2.2913 15.0301 2.09336 14.908 1.97125L13.0289 0.0916207C12.9702 0.0329897 12.8905 0 12.8078 0C12.7249 0 12.6453 0.0329897 12.5867 0.0916207L7.49988 5.17845L2.41306 0.0916207C2.29579 -0.0256413 2.08816 -0.0256413 1.9709 0.0916207L0.0915816 1.97125C-0.0305272 2.09336 -0.0305272 2.2913 0.0915816 2.41341L5.17825 7.50008L0.0915816 12.5867C-0.0305272 12.7089 -0.0305272 12.9068 0.0915816 13.0289L1.9709 14.9084C2.02953 14.967 2.10911 15 2.19198 15C2.27484 15 2.35443 14.967 2.41306 14.9084L7.49988 9.82155L12.5867 14.9084C12.6453 14.967 12.7249 15 12.8078 15C12.8905 15 12.9702 14.967 13.0289 14.9084L14.9082 13.0289C15.0303 12.9068 15.0303 12.7087 14.9082 12.5867L9.82151 7.50008Z" fill="black"/>
            </g>
          </svg>
        </StyledCancelButton>
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - 10px);
  @media (max-width: 640px) {
    padding-bottom: 10px;
  }
  > div > div {
    padding-top: 30px;
    padding-bottom: 12px;
    align-items: center;
    @media (max-width: 640px) {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }
  button {
    width: 135px;
  }
`
const StyledCancelButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  @media (max-width: 640px) {
    right: 30px;
  }
  button {
    height: 15px;
    width: 15px;
    padding: 0px;
    background: transparent;
    border: none;
    font-size: 20px;
    position: relative;
    z-index: 2;
  }
  svg {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1;
  }
`

export default WalletProviderModal
