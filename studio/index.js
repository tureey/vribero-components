import defaultTheme from '../config/theme/default'
import ButtonBasicStories from './button/basic'
import BadgeBasicStories from './badge/basic'
import InputStories from './form/input'
import LabelStories from './form/label'
import HelpTextStories from './form/helpText'
import InputWithLabelAndHelpTextStories from './form/InputWithLabelAndHelpText'
import PanelStories from './panel/basic'
import LinkStories from './navigation/link'
import BreadcrumbsStories from './navigation/breadcrumbs'
BreadcrumbsStories(defaultTheme)
LinkStories(defaultTheme)
PanelStories(defaultTheme)
InputWithLabelAndHelpTextStories(defaultTheme)
HelpTextStories(defaultTheme)
LabelStories(defaultTheme)
InputStories(defaultTheme)
BadgeBasicStories(defaultTheme)
ButtonBasicStories(defaultTheme)