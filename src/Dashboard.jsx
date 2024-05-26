import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  background-color: #1e1e2d;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
`;

const Card = styled.div`
  background-color: #2c2c3e;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const HalfWidth = styled.div`
  flex: 1 1 45%;
`;

const FullWidth = styled.div`
  flex: 1 1 100%;
`;

const Chart = styled.div`
  background-color: #3b3b4f;
  border-radius: 8px;
  height: 200px;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  background-color: #3b3b4f;
  border-radius: 8px;
  height: 30px;
  position: relative;
  margin-top: 20px;
`;

const Progress = styled.div`
  background-color: #4caf50;
  border-radius: 8px 0 0 8px;
  height: 100%;
  width: ${(props) => props.percentage || 0}%;
`;

const PieChart = styled.div`
  background-color: #3b3b4f;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: relative;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #3b3b4f;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Section>
        <Title>Donation Dashboard</Title>
        <Card>
          <h3>Your Donations</h3>
          <p>2,405</p>
          <p>+33% month over month</p>
        </Card>
        <Card>
          <h3>New Contribution</h3>
          <input type="number" placeholder="0.00 USD" />
          <button>Confirm</button>
        </Card>
      </Section>

      <Section>
        <Title>Company Statistics</Title>
        <FlexContainer>
          <HalfWidth>
            <Card>
              <h3>Top Weekly Donors</h3>
              <List>
                <ListItem>Donor 1 - $500.00</ListItem>
                <ListItem>Donor 2 - $450.00</ListItem>
                <ListItem>Donor 3 - $400.00</ListItem>
                <ListItem>Donor 4 - $350.00</ListItem>
                <ListItem>Donor 5 - $300.00</ListItem>
              </List>
            </Card>
          </HalfWidth>
          <HalfWidth>
            <Card>
              <h3>Top All Time Donors</h3>
              <List>
                <ListItem>Donor A - $2000.00</ListItem>
                <ListItem>Donor B - $1800.00</ListItem>
                <ListItem>Donor C - $1600.00</ListItem>
                <ListItem>Donor D - $1400.00</ListItem>
                <ListItem>Donor E - $1200.00</ListItem>
              </List>
            </Card>
          </HalfWidth>
        </FlexContainer>
      </Section>

      <Section>
        <FlexContainer>
          <HalfWidth>
            <Card>
              <h3>This Month</h3>
              <Chart>
                {/* Insert your chart library/component here */}
              </Chart>
            </Card>
          </HalfWidth>
          <HalfWidth>
            <Card>
              <h3>20% to Goal</h3>
              <ProgressBar>
                <Progress percentage={20} />
              </ProgressBar>
            </Card>
            <Card>
              <h3>This Month's Donations</h3>
              <p>10,353</p>
              <p>+8% month over month</p>
            </Card>
          </HalfWidth>
        </FlexContainer>
      </Section>

      <Section>
        <Title>Spending Dashboard</Title>
        <FlexContainer>
          <HalfWidth>
            <Card>
              <PieChart>
                {/* Insert your pie chart library/component here */}
              </PieChart>
              <p>$20,000 Fundraising Goal</p>
              <List>
                <ListItem>Spending Area 1</ListItem>
                <ListItem>Spending Area 2</ListItem>
                <ListItem>Spending Area 3</ListItem>
                <ListItem>Spending Area 4</ListItem>
              </List>
            </Card>
          </HalfWidth>
          <HalfWidth>
            <Card>
              <h3>Recent Transactions</h3>
              <List>
                <ListItem>- $500.00 - Area 1</ListItem>
                <ListItem>- $400.00 - Area 2</ListItem>
                <ListItem>- $300.00 - Area 3</ListItem>
                <ListItem>- $200.00 - Area 4</ListItem>
                <ListItem>- $100.00 - Area 5</ListItem>
              </List>
            </Card>
          </HalfWidth>
        </FlexContainer>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;