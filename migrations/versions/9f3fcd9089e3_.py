"""empty message

Revision ID: 9f3fcd9089e3
Revises: 971dbcd79008
Create Date: 2024-03-27 16:42:47.033987

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9f3fcd9089e3'
down_revision = '971dbcd79008'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trainers_classes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('class_name', sa.String(length=120), nullable=True))
        batch_op.add_column(sa.Column('class_details', sa.String(length=200), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trainers_classes', schema=None) as batch_op:
        batch_op.drop_column('class_details')
        batch_op.drop_column('class_name')

    # ### end Alembic commands ###