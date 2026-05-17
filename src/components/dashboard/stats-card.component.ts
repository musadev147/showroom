import { BaseComponent } from '../common/base.component';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend: string;
  trendType: 'up' | 'down' | 'neutral';
  icon: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

export class StatsCardComponent extends BaseComponent {
  private props: StatsCardProps;

  constructor(props: StatsCardProps) {
    super();
    this.props = {
      color: 'primary',
      ...props,
    };
  }

  public render(): string {
    const { title, value, trend, trendType, icon, color } = this.props;

    let trendClass = 'trend-neutral';
    let trendSymbol = '•';

    if (trendType === 'up') {
      trendClass = 'trend-up';
      trendSymbol = '↑';
    } else if (trendType === 'down') {
      trendClass = 'trend-down';
      trendSymbol = '↓';
    }

    return `
      <div class="glass-card stats-card border-glow-${color} animate-fade-in">
        <div class="stats-card-header">
          <span class="stats-card-title">${title}</span>
          <div class="stats-card-icon icon-bg-${color}">${icon}</div>
        </div>
        <div class="stats-card-body">
          <span class="stats-card-value">${value}</span>
          <div class="stats-card-trend ${trendClass}">
            <span class="trend-icon">${trendSymbol}</span>
            <span class="trend-text">${trend}</span>
          </div>
        </div>
      </div>
    `;
  }
}
