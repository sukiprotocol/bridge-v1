import React, { FC } from 'react'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'
import { usePools } from 'src/pages/Pools/PoolsContext'
import { useWeb3Context } from 'src/contexts/Web3Context'
import Button from 'src/components/buttons/Button'

const useStyles = makeStyles(() => ({
  sendButton: {
    marginTop: '6.4rem',
    width: '30.0rem'
  }
}))

interface Props {}

const SendButton: FC = (props: Props) => {
  const styles = useStyles()
  const { validFormFields, addLiquidity, sending } = usePools()
  const { walletConnected } = useWeb3Context()
  const handleSubmit = async () => {
    addLiquidity()
  }

  let buttonText = 'Add liquidity'
  if (!walletConnected) {
    buttonText = 'Connect wallet'
  }

  return (
    <Button
      className={styles.sendButton}
      startIcon={!validFormFields && <SendIcon />}
      onClick={handleSubmit}
      disabled={!validFormFields}
      loading={sending}
      large
      highlighted
    >
      {buttonText}
    </Button>
  )
}

export default SendButton
