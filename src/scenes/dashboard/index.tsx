import { Box, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box>Dashboard</Box>
  )
}

export default Dashboard