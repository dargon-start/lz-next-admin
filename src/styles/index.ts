import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ token }) => ({
  // Supports the writing style of css object
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    color: token.colorTextBase,
  },
}))
