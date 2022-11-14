import PropTypes from 'prop-types';
import { Statistics, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';


export const Statistic = ( { stats, title } ) =>
{
    return (
<Statistics>
    <Title>{title}</Title>
    <StatList>
        { stats.map( component => (
            <StatItem key={component.id}>
                <Label>{component.label }</Label>
                <Percentage>{component.percentage }%</Percentage>
            </StatItem>
        ))}
    </StatList>
</Statistics>
)  
}

Statistic.propTypes = {
    stats: PropTypes.arrayOf( PropTypes.shape( {
        id : PropTypes.string.isRequired,
        label : PropTypes.string.isRequired,
        percentage : PropTypes.number.isRequired,
    } ) ),
    title: PropTypes.string.isRequired
}

export const statisticTitle = 'UPLOAD STATS';